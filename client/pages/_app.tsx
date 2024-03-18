import { CssBaseline } from '@mui/material';
import '../styles/globals.css'
import { wrapper } from '@/store';
import { Provider } from 'react-redux';

//@ts-ignore
const MyApp: FC<AppProps> = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default MyApp;