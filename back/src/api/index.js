import Router from 'koa-router';
import posts from './posts';
import auth from './auth/index';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

/*api.get('/books', (ctx, next) => {
    ctx.body = 'GET' + ctx.request.path;
});*/

//라우터를 내보냄
export default api;