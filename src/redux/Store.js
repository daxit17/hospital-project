import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer/RootReducer'
import { rootSaga } from './saga/root.saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, sagaMiddleware]

export const store = createStore(
    persistedReducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store)