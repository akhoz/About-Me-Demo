from flask import Flask, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.example.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@example.com'
app.config['MAIL_PASSWORD'] = 'your-email-password'

mail = Mail(app)

@app.route('/api/send-email', methods=['POST'])
def send_email():
    data = request.get_json()

    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    msg = Message(subject, sender='your-email@example.com', recipients=[email])
    msg.body = message

    try:
        mail.send(msg)
        return jsonify({'message': 'Email sent successfully!'})
    except Exception as e:
        return jsonify({'message': 'Failed to send email.', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
