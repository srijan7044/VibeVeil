export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Welcome to VibeVeil</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.05);">

            <!-- Header -->
            <tr>
              <td align="center" style="background: linear-gradient(135deg, #667eea, #764ba2); padding:40px 30px;">
                <h1 style="color:#ffffff; margin:0; font-size:30px; font-weight:600; letter-spacing:1px;">
                  Welcome to VibeVeil
                </h1>
                <p style="color:#e0e0ff; margin-top:10px; font-size:15px;">
                  Where Conversations Feel Effortless
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 35px; color:#444;">

                <p style="font-size:18px; margin-top:0;">
                  Dear <strong>${name}</strong>,
                </p>

                <p style="font-size:16px; line-height:1.7;">
                  We’re delighted to welcome you to <strong>VibeVeil</strong>. 
                  Your account has been successfully created, and you are now ready 
                  to experience seamless and meaningful communication.
                </p>

                <div style="background:#f8f9ff; border-left:4px solid #764ba2; padding:20px; margin:30px 0; border-radius:8px;">
                  <p style="margin:0 0 10px 0; font-weight:600;">Here’s how to get started:</p>
                  <ul style="margin:0; padding-left:20px; line-height:1.8;">
                    <li>Personalize your profile</li>
                    <li>Connect with people who matter</li>
                    <li>Start secure conversations instantly</li>
                    <li>Share moments through media and messages</li>
                  </ul>
                </div>

                <!-- Button -->
                <div style="text-align:center; margin:35px 0;">
                  <a href="${clientURL}" 
                     style="background: linear-gradient(135deg, #667eea, #764ba2); 
                            color:#ffffff; 
                            padding:14px 35px; 
                            text-decoration:none; 
                            border-radius:50px; 
                            font-size:16px; 
                            font-weight:600;
                            display:inline-block;">
                    Launch VibeVeil
                  </a>
                </div>

                <p style="font-size:15px; line-height:1.6;">
                  If you have any questions or need assistance, our team is always ready to help.
                </p>

                <p style="margin-top:30px;">
                  Warm regards,<br>
                  <strong>The VibeVeil Team</strong>
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background:#f4f6f9; padding:25px; font-size:12px; color:#888;">
                © 2026 VibeVeil. All rights reserved.<br><br>
                This email was sent because you created an account on VibeVeil.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}
