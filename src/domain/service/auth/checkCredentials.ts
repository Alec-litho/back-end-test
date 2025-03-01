import {IUser} from '@/domain/entity/user';
import * as bcrypt from 'bcrypt';
import { Adapter } from '@/domain/types';

export type CheckCredentials = (data: {
  email: string,
  password: string,
}) => Promise<IUser | null | never>;

export const buildCheckCredentials = ({userRepository}: Adapter): CheckCredentials => {
  return async ({email, password}) => {
    const user = await userRepository.get({
      where: {
        email: { 
          mode: 'insensitive',
          equals: email
        },
        password: {
          not: null
        }
      },
      select: {
        id: true,
        email: true,
        avatar: true,
        created_at: true,
        password:true

      }
    }) 
    console.log('auth', user, password)

    if (!user || !user.password) {
      return null
    }

    const passwordsSame = await bcrypt.compare(password, user?.password)
    console.log('auth-----', passwordsSame)

    if (!passwordsSame) {
      return null
    }
 
    return user
  }
}
