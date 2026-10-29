import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const { action } = event.queryStringParameters || {};
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;

  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Clave de API ausente' }) };
  }

  let url = '';
  if (action === 'next_match') {
    url = 'https://api.football-data.org/v4/teams/81/matches?status=SCHEDULED&limit=1';
  } else if (action === 'last_matches') {
    url = 'https://api.football-data.org/v4/teams/81/matches?status=FINISHED&limit=5';
  } else if (action === 'standings') {
    url = 'https://api.football-data.org/v4/competitions/PD/standings';
  } else {
    return { statusCode: 400, body: JSON.stringify({ error: 'Acción no reconocida' }) };
  }

  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': apiKey }
    });

    if (response.status === 429) {
      return { statusCode: 429, body: JSON.stringify({ error: 'Cuota de peticiones agotada' }) };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Fallo en la comunicación con el proveedor' }) };
  }
};