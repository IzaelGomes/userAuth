import {Iusers, user} from './IuserRepository'


class UserRepository implements Iusers{

    save(data: user): Promise<user> {
        throw new Error('Method not implemented.')
    }

}

export  {UserRepository}