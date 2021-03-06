import { AuthLoginAction } from './controllers/auth-login-action';
import { AuthLogoutAction } from './controllers/auth-logout-action';
import { PingAction } from './controllers/ping-action';
import { StandingsGetAction } from './controllers/standings-get-action';
import { UsersCreateAction } from './controllers/users/users-create-action';
import { UsersGetAction } from './controllers/users/users-get-action';
import { WorkoutCreateAction } from './controllers/workout-create-action';

export const AppRoutes = [
  { path: '/login', method: 'post', action: AuthLoginAction },
  { path: '/logout', method: 'post', action: AuthLogoutAction },
  { path: '/ping', method: 'get', action: PingAction },
  { path: '/standings', method: 'get', action: StandingsGetAction },
  { path: '/users/:userId', method: 'get', action: UsersGetAction },
  { path: '/users', method: 'post', action: UsersCreateAction },
  { path: '/workouts', method: 'post', action: WorkoutCreateAction },
];
