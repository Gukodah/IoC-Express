import { controller, httpGet } from 'inversify-express-utils'
import { UserService } from './user.service'

@controller('/users')
export class UserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly _userService:UserService) {}

  @httpGet('/')
  async index (): Promise<string> {
    const users = await this._userService.getUsers()
    return `current users: ${users.length}`
  }
}
