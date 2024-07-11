const amqp = require('amqplib')
const { v4: uuidv4 } = require('uuid')

const sendUser = async (userData) => {
    console.log('user', userData)
    try {
        const conn = await amqp.connect("amqp://execcode_user:execcode_password@localhost:5672")
        const channel = await conn.createChannel()
        const queue = "users"
        const BufferData = Buffer.from(JSON.stringify(userData))

        await channel.assertQueue(queue, { durable: false })
        channel.sendToQueue(queue, BufferData, { persistent: false })
        console.log("send to queue completed! : ", userData)

        setTimeout(()=>{
            console.log("Close connection")
            conn.close()
            process.exit()
        }, 500)
    } catch (err) {
        console.log("error: ", err)
    }
}

const userData = {
    userId: uuidv4(),
    username: "producer",
    password: "rabbit"
}

sendUser(userData)