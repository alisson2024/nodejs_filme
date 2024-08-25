import filmeController from './controller/filmeController.js'
import express from 'express';



export default function adiconarRotas (servidor) {
    servidor.use(filmeController);
    servidor.use('/storage/capa', express.static('./storage/capa'));
}