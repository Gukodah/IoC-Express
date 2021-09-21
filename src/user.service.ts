import { injectable } from 'inversify'
import { UserRepository } from './user.repository'

@injectable()
export class UserService {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly _userRepository:UserRepository) {}

  async getUsers ():Promise<string[]> {
    return this._userRepository.getUsers()
  }
}
