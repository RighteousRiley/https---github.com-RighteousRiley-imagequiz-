import React from 'react';

class Home extends React.Component {

    loadImages = () => {

    };
    
    render () {
        return (
        <div id="flowersDiv">
        <table>
            <tr>
                <td>
                    <div>
                        <img src="imagequiz\src\images\daffodil.png" />
                        <p>Daffodil</p>
                    </div>
                </td>
                <td>
                    <div>
                        <img src="images/cherryblossom.png" />
                        <p>Cherry blossom</p>
                    </div>
                </td>
                <td>
                    <div>
                        <img src="images/lily.jpg" />
                        <p>Lily</p>
                    </div>
                </td>
                <td>
                    <div>
                        <img src="images/daisy.jpg" />
                        <p>Daisy</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <img src="../images/sunflower.png" />
                        <p>Sunflower</p>
                    </div>
                </td>
                <td>
                    <div>
                        <img src="images/tulip.png" />
                        <p>Tulip</p>
                    </div>
                </td>
                <td>
                    <div>
                        <img src="images/rose.png" />
                        <p>Rose</p>
                    </div>
                </td>
                <td>
                    <div>
                        <img src="images/waterlily.png" />
                        <p>Water lily</p>
                    </div>
                </td>
            </tr>
        </table>
    </div>);
    }
}
export default Home;