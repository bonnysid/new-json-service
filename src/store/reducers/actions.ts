import { authActions } from 'store/reducers/auth';
import { consoleActions } from 'store/reducers/console';

const actions = { ...authActions, ...consoleActions };

export default actions;
