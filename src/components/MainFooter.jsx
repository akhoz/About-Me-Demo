import { Footer } from 'flowbite-react';

function MainFooter() {
    const footerStyle = {
        borderRadius: '0',
    };

    return (
        <Footer container style={footerStyle} className="">
            <Footer.Copyright href="https://github.com/akhoz" by="Adrián Villalobos™" year={2023} />
        </Footer>
    );
}

export default MainFooter;