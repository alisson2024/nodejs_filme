import filmeController from './controller/filmeController.js'




export default function adiconarRotas (servidor) {
    servidor.use(filmeController);

}