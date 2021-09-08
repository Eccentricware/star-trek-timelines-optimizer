
import React, {useState} from 'react';


const BeholdAdviser = (props) => {
  const [candidate1, setCandidate1] = useState('');
  const [candidate2, setCandidate2] = useState('');
  const [candidate3, setCandidate3] = useState('');

  const handleChange1 = (name) => {
    setCandidate1(name);
  }
  const handleChange2 = (name) => {
    setCandidate2(name);
  }
  const handleChange3 = (name) => {
    setCandidate3(name);
  }

  const handleClick = (slot, candidate) => {
    props.processCandidate(slot, candidate);
  }

  return (
    <div className="behold-section">
      <h3>Behold!</h3>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>
              <div className="behold-candidate candidate-1">
                <textarea className="behold-candidate-input" type="text"
                  placeholder="Enter Name of Option 1" onChange={(e) => { handleChange1(e.target.value) }}
                />
              </div>
              <div>
                <button className="candidate-button" type="button" onClick={() => handleClick('slot1', candidate1)}>Check 1st Option</button>
              </div>
            </td>
            <td>
              <div className="behold-candidate candidate-2">
                <textarea className="behold-candidate-input" type="text"
                  placeholder="Enter Name of Option 2" onChange={(e) => { handleChange2(e.target.value) }}
                />
              </div>
              <div>
                <button className="candidate-button" type="button" onClick={() => handleClick('slot2', candidate2)}>Check 2nd Option</button>
              </div>
            </td>
            <td>
              <div className="behold-candidate candidate-3">
                <textarea className="behold-candidate-input" type="text"
                  placeholder="Enter Name of Option 3" onChange={(e) => { handleChange3(e.target.value) }}
                />
              </div>
              <div>
                <button className="candidate-button" type="button" onClick={() => handleClick('slot3', candidate3)}>Check 1st Option</button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="category"></td>
            <td>{props.beholdCrew.slot1 ? props.beholdCrew.slot1.name : 'Select 1st Candidate'}</td>
            <td>{props.beholdCrew.slot2 ? props.beholdCrew.slot2.name : 'Select 2nd Candidate'}</td>
            <td>{props.beholdCrew.slot3 ? props.beholdCrew.slot3.name : 'Select 3rd Candidate'}</td>
          </tr>
          <tr>
            <td className="category">EV of Training</td>
            <td>Crew 1 Training EV</td>
            <td>Crew 2 Training EV</td>
            <td>Crew 3 Training EV</td>
          </tr>
          <tr>
            <td className="category">EV of Citation</td>
            <td>Crew 1 Citation EVs</td>
            <td>Crew 2 Citation EVs</td>
            <td>Crew 3 Citation EVs</td>
          </tr>
          <tr>
            <td className="category">Collection Count</td>
            <td>Crew 1 Collection Count</td>
            <td>Crew 2 Collection Count</td>
            <td>Crew 3 Collection Count</td>
          </tr>
          <tr>
            <td className="category">Shuttle (Bases)</td>
            <td>Crew 1 Shuttle (Bases)</td>
            <td>Crew 2 Shuttle (Bases)</td>
            <td>Crew 3 Shuttle (Bases)</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BeholdAdviser;