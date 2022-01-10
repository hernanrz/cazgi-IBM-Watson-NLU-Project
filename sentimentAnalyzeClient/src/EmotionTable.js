import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        const { emotions } = this.props;

      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <thead>
                <tr>
                    <th>
                        Emotion
                    </th>
                    <th>
                        Value
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(emotions).map(emotion => (
                        <tr key={emotion}>
                            <td>
                                {emotion}
                            </td>
                            <td>
                                {emotions[emotion]}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;