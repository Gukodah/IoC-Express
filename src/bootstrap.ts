import 'dotenv/config'
import 'reflect-metadata'

import { UserRepository } from './user.repository'
import { UserService } from './user.service'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'

import './user.controller'

const { PORT } = process.env

export function Bootstrap () {
  const container = new Container()

  container.bind(UserRepository).toSelf()
  container.bind(UserService).toSelf()

  const server = new InversifyExpressServer(container)

  const app = server.build()

  app.listen(PORT, () => {
    console.log(`Server runing on: ${PORT}`)
  })
}
