import { render,screen,fireEvent, getByAltText} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Footer from './Footer';

describe('footer component',()=>{
    test('render footer component',()=>{
   const{container}=     render(
            <Footer/>
        )
        expect(container).toBeInTheDocument();
        
        expect(screen.getByText('STAY UPTO DATE ABOUT OUR LATEST OFFERS')).toBeInTheDocument();


    })
})