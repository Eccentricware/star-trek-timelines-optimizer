
import React, {useState} from 'react';
import BeholdRarityDisplay from '../Shared/BeholdRarityDisplay.jsx';
import CrewSkills from '../CrewSkills/CrewSkills.jsx';
import CommandIcon from '../Icons/CommandIcon.jsx';
import DiplomacyIcon from '../Icons/DiplomacyIcon.jsx';
import EngineeringIcon from '../Icons/EngineeringIcon.jsx';
import MedicineIcon from '../Icons/MedicineIcon.jsx';
import ScienceIcon from '../Icons/ScienceIcon.jsx';
import SecurityIcon from '../Icons/SecurityIcon.jsx';


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

  const icons = {
    command: {
      primary: <CommandIcon color='gold' position={0} dimLimit={props.dimLimit}/>,
      secondary: <CommandIcon color='silver' position={6} dimLimit={props.dimLimit}/>,
      tertiary: <CommandIcon color='#b08d57' position={6} dimLimit={props.dimLimit}/>,
      voyageSecondary: <CommandIcon color='silver' position={22} dimLimit={props.dimLimit}/>
    },
    diplomacy: {
      primary: <DiplomacyIcon color='gold' position={-6} dimLimit={props.dimLimit}/>,
      secondary: <DiplomacyIcon color='silver' position={0} dimLimit={props.dimLimit}/>,
      tertiary: <DiplomacyIcon color='#b08d57' position={-6} dimLimit={props.dimLimit}/>,
      voyageSecondary: <DiplomacyIcon color='silver' position={10} dimLimit={props.dimLimit}/>
    },
    engineering: {
      primary: <EngineeringIcon color='gold' position={0} dimLimit={props.dimLimit}/>,
      secondary: <EngineeringIcon color='silver' position={0} dimLimit={props.dimLimit}/>,
      tertiary: <EngineeringIcon color='#b08d57' position={0} dimLimit={props.dimLimit}/>,
      voyageSecondary: <EngineeringIcon color='silver' position={24} dimLimit={props.dimLimit}/>
    },
    medicine: {
      primary: <MedicineIcon color='gold' position={0} dimLimit={props.dimLimit}/>,
      secondary: <MedicineIcon color='silver' position={0} dimLimit={props.dimLimit}/>,
      tertiary: <MedicineIcon color='#b08d57' position={0} dimLimit={props.dimLimit}/>,
      voyageSecondary: <MedicineIcon color='silver' position={24} dimLimit={props.dimLimit}/>
    },
    science: {
      primary: <ScienceIcon color='gold' position={0} dimLimit={props.dimLimit}/>,
      secondary: <ScienceIcon color='silver' position={0} dimLimit={props.dimLimit}/>,
      tertiary: <ScienceIcon color='#b08d57' position={8} dimLimit={props.dimLimit}/>,
      voyageSecondary: <ScienceIcon color='silver' position={24} dimLimit={props.dimLimit}/>
    },
    security: {
      primary: <SecurityIcon color='gold' position={0} dimLimit={props.dimLimit}/>,
      secondary: <SecurityIcon color='silver' position={0} dimLimit={props.dimLimit}/>,
      tertiary: <SecurityIcon color='#b08d57' position={0} dimLimit={props.dimLimit}/>,
      voyageSecondary: <SecurityIcon color='silver' position={24} dimLimit={props.dimLimit}/>
    },
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
            <td>{props.beholdCrew.slot1 !== undefined ? props.beholdCrew.slot1.name : 'Select 1st Candidate'}</td>
            <td>{props.beholdCrew.slot2 ? props.beholdCrew.slot2.name : 'Select 2nd Candidate'}</td>
            <td>{props.beholdCrew.slot3 ? props.beholdCrew.slot3.name : 'Select 3rd Candidate'}</td>
          </tr>
          <tr>
            <td className="category">Skill Signature</td>
            <td>
              { props.beholdCrew.slot1 ? icons[props.beholdCrew.slot1.skillsRanked[0]].primary : null }
              { props.beholdCrew.slot1 && props.beholdCrew.slot1.skillsRanked[1] ? icons[props.beholdCrew.slot1.skillsRanked[1]].secondary : null}
              { props.beholdCrew.slot1 && props.beholdCrew.slot1.skillsRanked[2] ? icons[props.beholdCrew.slot1.skillsRanked[2]].tertiary : null}
            </td>
            <td>
              {props.beholdCrew.slot2 ? icons[props.beholdCrew.slot2.skillsRanked[0]].primary : null}
              {props.beholdCrew.slot2 && props.beholdCrew.slot2.skillsRanked[1] ? icons[props.beholdCrew.slot2.skillsRanked[1]].secondary : null}
              {props.beholdCrew.slot2 && props.beholdCrew.slot2.skillsRanked[2] ? icons[props.beholdCrew.slot2.skillsRanked[2]].tertiary : null}
            </td>
            <td>
              {props.beholdCrew.slot3 ? icons[props.beholdCrew.slot3.skillsRanked[0]].primary : null}
              {props.beholdCrew.slot3 && props.beholdCrew.slot3.skillsRanked[1] ? icons[props.beholdCrew.slot3.skillsRanked[1]].secondary : null}
              {props.beholdCrew.slot3 && props.beholdCrew.slot3.skillsRanked[2] ? icons[props.beholdCrew.slot3.skillsRanked[2]].tertiary : null}
            </td>
          </tr>
          <tr>
            <td className="category">Rarity EVs</td>
            <td>
              <div>
                {
                  props.beholdCrew.slot1 && props.beholdCrew.slot1.rarityPotential[5]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay maxRarity={props.beholdCrew.slot1.maxRarity}
                          currentRarity={5}
                          beholdRarity={props.beholdCrew.slot1.beholdRarity}
                          chronsInvested={props.beholdCrew.slot1.chronsInvested}
                        />
                        <div>{Math.ceil(props.beholdCrew.slot1.rarityPotential[5].addedEV)}</div>
                      </div>
                      <div>
                      {
                        props.beholdCrew.slot1.rarityPotential[5].voyagesImproved.map((voyagePair, i) => {
                          return (
                            <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                              <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                              <g>{icons[voyagePair.split('/')[0]].primary}</g>
                            </svg>
                          )
                        })
                      }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot1 && props.beholdCrew.slot1.rarityPotential[4]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={4} maxRarity={props.beholdCrew.slot1.maxRarity} beholdRarity={props.beholdCrew.slot1.beholdRarity} chronsInvested={props.beholdCrew.slot1.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot1.rarityPotential[4].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot1.rarityPotential[4].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot1 && props.beholdCrew.slot1.rarityPotential[3]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={3} maxRarity={props.beholdCrew.slot1.maxRarity} beholdRarity={props.beholdCrew.slot1.beholdRarity} chronsInvested={props.beholdCrew.slot1.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot1.rarityPotential[3].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot1.rarityPotential[3].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot1 && props.beholdCrew.slot1.rarityPotential[2]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={2} maxRarity={props.beholdCrew.slot1.maxRarity} beholdRarity={props.beholdCrew.slot1.beholdRarity} chronsInvested={props.beholdCrew.slot1.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot1.rarityPotential[2].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot1.rarityPotential[2].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot1 && props.beholdCrew.slot1.rarityPotential[1]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={1} maxRarity={props.beholdCrew.slot1.maxRarity} beholdRarity={props.beholdCrew.slot1.beholdRarity} chronsInvested={props.beholdCrew.slot1.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot1.rarityPotential[1].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot1.rarityPotential[1].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
            </td>
            <td>
              <div>
                {
                  props.beholdCrew.slot2 && props.beholdCrew.slot2.rarityPotential[5]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay maxRarity={props.beholdCrew.slot2.maxRarity}
                          currentRarity={5}
                          beholdRarity={props.beholdCrew.slot2.beholdRarity}
                          chronsInvested={props.beholdCrew.slot2.chronsInvested}
                        />
                        <div>{Math.ceil(props.beholdCrew.slot2.rarityPotential[5].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot2.rarityPotential[5].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot2 && props.beholdCrew.slot2.rarityPotential[4]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={4} maxRarity={props.beholdCrew.slot2.maxRarity} beholdRarity={props.beholdCrew.slot2.beholdRarity} chronsInvested={props.beholdCrew.slot2.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot2.rarityPotential[4].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot2.rarityPotential[4].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot2 && props.beholdCrew.slot2.rarityPotential[3]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={3} maxRarity={props.beholdCrew.slot2.maxRarity} beholdRarity={props.beholdCrew.slot2.beholdRarity} chronsInvested={props.beholdCrew.slot2.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot2.rarityPotential[3].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot2.rarityPotential[3].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot2 && props.beholdCrew.slot2.rarityPotential[2]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={2} maxRarity={props.beholdCrew.slot2.maxRarity} beholdRarity={props.beholdCrew.slot2.beholdRarity} chronsInvested={props.beholdCrew.slot2.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot2.rarityPotential[2].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot2.rarityPotential[2].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot2 && props.beholdCrew.slot2.rarityPotential[1]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={1} maxRarity={props.beholdCrew.slot2.maxRarity} beholdRarity={props.beholdCrew.slot2.beholdRarity} chronsInvested={props.beholdCrew.slot2.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot2.rarityPotential[1].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot2.rarityPotential[1].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
            </td>
            <td>
              <div>
                {
                  props.beholdCrew.slot3 && props.beholdCrew.slot3.rarityPotential[5]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay maxRarity={props.beholdCrew.slot3.maxRarity}
                          currentRarity={5}
                          beholdRarity={props.beholdCrew.slot3.beholdRarity}
                          chronsInvested={props.beholdCrew.slot3.chronsInvested}
                        />
                        <div>{Math.ceil(props.beholdCrew.slot3.rarityPotential[5].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot3.rarityPotential[5].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot3 && props.beholdCrew.slot3.rarityPotential[4]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={4} maxRarity={props.beholdCrew.slot3.maxRarity} beholdRarity={props.beholdCrew.slot3.beholdRarity} chronsInvested={props.beholdCrew.slot3.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot3.rarityPotential[4].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot3.rarityPotential[4].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot3 && props.beholdCrew.slot3.rarityPotential[3]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={3} maxRarity={props.beholdCrew.slot3.maxRarity} beholdRarity={props.beholdCrew.slot3.beholdRarity} chronsInvested={props.beholdCrew.slot3.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot3.rarityPotential[3].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot3.rarityPotential[3].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot3 && props.beholdCrew.slot3.rarityPotential[2]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={2} maxRarity={props.beholdCrew.slot3.maxRarity} beholdRarity={props.beholdCrew.slot3.beholdRarity} chronsInvested={props.beholdCrew.slot3.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot3.rarityPotential[2].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot3.rarityPotential[2].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>

                    :
                    null
                }
              </div>
              <div>
                {
                  props.beholdCrew.slot3 && props.beholdCrew.slot3.rarityPotential[1]
                    ?
                    <div>
                      <div>
                        <BeholdRarityDisplay currentRarity={1} maxRarity={props.beholdCrew.slot3.maxRarity} beholdRarity={props.beholdCrew.slot3.beholdRarity} chronsInvested={props.beholdCrew.slot3.chronsInvested} />
                        <div>{Math.ceil(props.beholdCrew.slot3.rarityPotential[1].addedEV)}</div>
                      </div>
                      <div>
                        {
                          props.beholdCrew.slot3.rarityPotential[1].voyagesImproved.map((voyagePair, i) => {
                            return (
                              <svg width="50" height="25" viewBox="0 0 50 25" padding="0" key={i}>
                                <g transform="translate(12.5 0)">{icons[voyagePair.split('/')[1]].voyageSecondary}</g>
                                <g>{icons[voyagePair.split('/')[0]].primary}</g>
                              </svg>
                            )
                          })
                        }
                      </div>
                    </div>
                    :
                    null
                }
              </div>
            </td>
          </tr>
          <tr>
            <td className="category">Collection Count</td>
            <td>{props.beholdCrew.slot1 ? props.beholdCrew.slot1.collections.length: null} Collections </td>
            <td>{props.beholdCrew.slot2 ? props.beholdCrew.slot2.collections.length: null} Collections </td>
            <td>{props.beholdCrew.slot3 ? props.beholdCrew.slot3.collections.length: null} Collections </td>
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