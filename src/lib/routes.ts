import { Express, Router } from 'express';
import { addUserAPI } from '@api/user';

export function apiRoutes(app: Express): void {
    let apiUserRoutes: Router = Router();

    addUserAPI(apiUserRoutes);

    app.use('/api/user', apiUserRoutes);
}
