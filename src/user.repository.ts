import { injectable } from 'inversify'

@injectable()
export class UserRepository {
  public async getUsers ():Promise<string[]> {
    return ['user1', 'user2', 'user2']
  }
}
