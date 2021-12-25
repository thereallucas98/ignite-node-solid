/* eslint-disable prettier/prettier */
import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userToAdmin = this.usersRepository.findById(user_id);

    if (!userToAdmin) {
      throw new Error('User not found');
    }

    const userisNowAdmin = this.usersRepository.turnAdmin(userToAdmin);

    return userisNowAdmin;
  }
}

export { TurnUserAdminUseCase };
