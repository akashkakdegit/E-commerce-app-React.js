import { render,screen,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import appStore from '../store/appStore';

describe('Header Component', () => {
  test('renders header text and sign-up button', async() => {
    const { container} = render(
        <Provider store={appStore}>
      <Router>
        <Navbar/>
      </Router>
      </Provider>
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText('SHOP.CO')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('On Sale')).toBeInTheDocument();
    expect(screen.getByText('New Arrivals')).toBeInTheDocument();
    expect(screen.getByText('Brands')).toBeInTheDocument();
    expect(screen.getByTestId('cart-button')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('cart-button'));
  });
});
