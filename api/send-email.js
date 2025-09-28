// Vercel API Route для отправки email
export default async function handler(req, res) {
  // Устанавливаем CORS заголовки
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, game, message } = req.body;

    // Простая отправка через fetch к EmailJS
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_3njoeza',
        template_id: 'template_qf27ivk',
        user_id: 'AkMK-87kW94De7wzD',
        template_params: {
          from_name: name,
          from_email: email,
          phone: phone,
          game: game,
          message: message,
          to_email: 'nababka2@gmail.com'
        }
      })
    });

    if (response.ok) {
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } else {
      const errorData = await response.text();
      console.error('EmailJS error:', errorData);
      res.status(400).json({ error: 'Failed to send email', details: errorData });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}