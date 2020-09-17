import mongoose from 'mongoose';

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => {
        return console.log(`Conexão estabelecida com ${db}`);
      })
      .catch(err => {
        console.log(`Erro de conexão com ${db} o motivo é : `, err);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('desconectar', connect);
};
