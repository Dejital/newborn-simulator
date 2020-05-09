import React, { useState, useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import { Container, Grid, Header, Input, Button } from 'semantic-ui-react';

const style = {
  h1: {
    paddingTop: '3em'
  },
  input: {
    marginBottom: '0.5em'
  },
  button: {
    marginBottom: '0em'
  }
};

const Weight = (props) => (
  <Input style={style.input} label='Weight' value={`${(Math.round(props.weight * 100) / 100)} oz`} />
);

const Age = (props) => (
  <Input style={style.input} label='Age' value={`${(Math.round(props.hours * 100) / 100)} hrs`} />
);

const Place = (props) => (
  <Input style={style.input} label='Place' value={props.place} />
);

function GetPoopinessColor(diaperFullness) {
  if (diaperFullness > 70) {
    return 'brown';
  } else if (diaperFullness > 30) {
    return 'yellow';
  }
  return null;
}

function GetPoopinessLabel(diaperFullness) {
  if (diaperFullness > 70) {
    return '💩Change Diaper';
  }
  return '🧷Change Diaper';
}

const ChangeDiaper = (props) => (
  <Button style={style.button} onClick={props.onClick} loading={props.loading} color={GetPoopinessColor(props.diaperFullness)} disabled={props.disabled}>
    {GetPoopinessLabel(props.diaperFullness)}
  </Button>
);

const Feeling = (props) => (
  <Input style={style.input} label='Feeling' value={props.feeling} />
);

const Analytics = (props) => (
  <Container>
    <Header as='h3'>History</Header>
    <p>🥛Ounces fed: {(Math.round(props.analytics.ouncesFed * 100) / 100)}</p>
    <p>🗑️Diapers changed: {props.analytics.diapersChanged}</p>
  </Container>
);

const StringConstants = {
  crib: '🛌Crib',
  held: '👶Held',
};

function GetMoodDisplay(mood) {
  if (mood > 80) {
    return '😊Happy';
  } else if (mood > 50) {
    return '😗OK';
  } else if (mood > 25) {
    return '😔Fussy';
  } else if (mood > 10) {
    return '😡Angry';
  } else {
    return '🤬Extreme';
  }

  return '😢Crying';
  return '😭Screaming';
  return '😪Sleepy';
  return '😴Sleeping';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function App() {
  const agePerTick = 0.2; // Essentially the "game speed"

  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(100);
  const [place, setPlace] = useState(StringConstants.crib);
  const [breastmilk, setBreastmilk] = useState(0);
  const [breastmilkCapacity, setBreastmilkCapacity] = useState(0.5);
  const [isBreastFeeding, setIsBreastFeeding] = useState(false);
  const [isBottleFeeding, setIsBottleFeeding] = useState(false);
  const [isChangingDiaper, setIsChangingDiaper] = useState(false);
  const [mood, setMood] = useState(70);
  const [diaperFullness, setDiaperFullness] = useState(0);
  const [hunger, setHunger] = useState(10);

  // TODO: Refactor this to useReducer, because it's a complex object
  const [analytics, setAnalytics] = useState({ ouncesFed: 0, diapersChanged: 0 });

  useEffect(() => {
    let timeout = setTimeout(() => {
      // Age the baby
      setAge(age + agePerTick);

      // Fill up breastmilk
      if (!isBreastFeeding && breastmilk < breastmilkCapacity) {
        const newBreastmilk = breastmilkCapacity * (breastmilkCapacity/(2/agePerTick)); // TODO: Better formula
        setBreastmilk(Math.min(breastmilk + newBreastmilk, breastmilkCapacity));
      }

      // Change mood
      var moodAdjust = 1;
      // Location
      if (place === StringConstants.held) {
        moodAdjust += 2;
      }
      // Diaper
      if (diaperFullness > 70 && !isChangingDiaper) {
        moodAdjust -= 5;
      } else if (diaperFullness > 30 && !isChangingDiaper) {
        moodAdjust -= 2;
      }
      // Hunger
      if (hunger > 50 && !isBottleFeeding && !isBottleFeeding) {
        moodAdjust -= 5;
      }
      setMood(Math.max(Math.min(100, mood + moodAdjust), 0));

      // Fill diaper
      if (!isChangingDiaper && diaperFullness < 100 && (Math.random() < (10/(24/agePerTick)))) {
        const diaperDeposit = getRandomInt(101);
        setDiaperFullness(Math.min(100, diaperDeposit + diaperFullness))
      }

      // Get hungry
      if (!isBreastFeeding && !isBottleFeeding && hunger < 100) {
        setHunger(Math.min(100, hunger + 5));
      }

      // Augment breastmilk capacity just a little bit (most should come from baby requirements)
      setBreastmilkCapacity(breastmilkCapacity * 1.01);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  const onBreastFeed = () => {
    setIsBreastFeeding(true);
    const ouncesFed = breastmilk; // TODO: Determine with formula
    setTimeout(() => {
      setWeight(weight + ouncesFed);
      setBreastmilk(breastmilk - ouncesFed);
      setAnalytics({ ...analytics, ouncesFed: analytics.ouncesFed + ouncesFed });
      setBreastmilkCapacity(breastmilkCapacity * 1.05);
      setMood(Math.min(mood + 25, 100));
      setHunger(0);
      setIsBreastFeeding(false);
    }, 2000);
  };

  const onBottleFeed = () => {
    // TODO
    setIsBottleFeeding(true);
    const ouncesFed = 1;
    setTimeout(() => {
      setWeight(weight + ouncesFed);
      setAnalytics({ ...analytics, ouncesFed: analytics.ouncesFed + ouncesFed });
      setIsBottleFeeding(false);
      setMood(Math.min(mood + 25, 100));
      setHunger(0);
    }, 2000);
  };

  const onChangeDiaper = () => {
    setIsChangingDiaper(true);
    setTimeout(() => {
      setAnalytics({ ...analytics, diapersChanged: analytics.diapersChanged + 1 });
      setDiaperFullness(0);
      setMood(Math.min(mood + 25, 100));
      setIsChangingDiaper(false);
    }, 2000);
  };

  return (
    <div>
      <AppView
        weight={weight}
        age={age}
        place={place}
        analytics={analytics}
        mood={mood}
        diaperFullness={diaperFullness}
        hunger={hunger}

        onBreastFeed={() => onBreastFeed()}
        onBottleFeed={() => onBottleFeed()}
        onChangeDiaper={() => onChangeDiaper()}
        onHoldBaby={() => setPlace(StringConstants.held)}
        onCrib={() => setPlace(StringConstants.crib)}

        isBreastFeeding={isBreastFeeding}
        isBottleFeeding={isBottleFeeding}
        isChangingDiaper={isChangingDiaper}
      />
    </div>
  );
}

function AppView(
  {
    weight,
    age,
    place,
    analytics,
    mood,
    diaperFullness,
    hunger,

    onBreastFeed,
    onBottleFeed,
    onHoldBaby,
    onCrib,
    onChangeDiaper,

    isBreastFeeding,
    isBottleFeeding,
    isChangingDiaper
   }) {
  return (
    <Container>
      <Header style={style.h1} textAlign='left' as='h1'>
        Newborn Sim
        <Header.Subheader>
          Simulating the parenting process for a newborn baby.
        </Header.Subheader>
      </Header>

      <Grid columns={3}>
        <Grid.Column>
          <Header as='h3'>Status</Header>
          <Feeling feeling={GetMoodDisplay(mood)} />
          <Place place={place} />
          <Weight weight={weight} />
          <Age hours={age} />
        </Grid.Column>

        <Grid.Column>
          <Header as='h3'>Actions</Header>
          <Header as='h4'>Feeding</Header>
          <Button style={style.button} onClick={onBreastFeed} loading={isBreastFeeding} disabled={isBreastFeeding || isBottleFeeding || isChangingDiaper}>
            🤱Breast Feed
          </Button>
          <Button style={style.button} onClick={onBottleFeed} loading={isBottleFeeding} disabled={isBreastFeeding || isBottleFeeding || isChangingDiaper}>
            🍼Bottle Feed
          </Button>
          <br />
          <Header as='h4'>Diapers</Header>
          <ChangeDiaper onClick={onChangeDiaper} loading={isChangingDiaper} diaperFullness={diaperFullness} disabled={isBreastFeeding || isBottleFeeding || isChangingDiaper} />
          <br />
          <Header as='h4'>Placement</Header>
          <Button onClick={onHoldBaby}>👶Hold Baby</Button>
          <Button onClick={onCrib}>{StringConstants.crib}</Button>
        </Grid.Column>

        <Grid.Column>
          <Analytics analytics={analytics} />
          <br />
          <Container>
            <Header as='h3'>Debug</Header>
            <p>Mood: {mood}</p>
            <p>Diaper: {diaperFullness}</p>
            <p>Hunger: {hunger}</p>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

AppView.propTypes = {
  weight: PropTypes.number,
  age: PropTypes.number,
  place: PropTypes.string,
  analytics: PropTypes.shape({
    ouncesFed: PropTypes.number,
    diapersChanged: PropTypes.number
  }),
  mood: PropTypes.number,
  diaperFullness: PropTypes.number,
  hunger: PropTypes.number,

  onBreastFeed: PropTypes.func,
  onBottleFeed: PropTypes.func,
  onHoldBaby: PropTypes.func,
  onCrib: PropTypes.func,

  isBreastFeeding: PropTypes.bool,
  isBottleFeeding: PropTypes.bool,
  isChangingDiaper: PropTypes.bool,
};

export default App;
