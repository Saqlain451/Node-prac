import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'willis45@ethereal.email',
                pass: 'En2J918GfxkMVnz76R'
            }
        })

        const mailOption = {
            from: "saqlainmustaq783@gmail.com",
            to: "jobs.sakil.mustak@gmail.com",
            subject: 'This is a test email',
            text: 'This is the body of the email.',
        }

        const info = await transport.sendMail({...mailOption});

        res.status(201).json({msg: info});

    } catch (err) {
        console.error(err)
    }
}

export {sendMail}