
# Mini project Lap3

Project was have done due to following:

### Technical Requirements

## Components:

#### App (will require Switch and Route from react-router-dom)
- Always renders a BackButton
- On '/' renders 'Welcome'
- On '/counter' renders Counter component
- On '/things' renders Things component

#### Counter
- has local state with a key of count that initializes at 0
- has a custom method called handleClick
- renders a button which when clicked calls handleClick and increases the counter by 1
- renders a button which when clicked calls handleClick and decreases the counter by 1
- renders a span which shows the current count stored in state

#### Things (will need access to connect from react-redux)
- receives an array of things from a Redux store ['hummus', 'celery', 'cucumber']
- has a form with one controlled text input and a submit button
- on form submission, the user's input is added to 'things' in the Redux store
- renders the list of things

#### BackButton (will require withRouter from react-router-dom)
- renders a button which when clicked, sends the user back a page in their history

#### Reducer
- One reducer for "things"
- initializes with state of { all: ['hummus', 'celery', 'cucumber'] }
- can handle an action: { type: 'ADD_THING', payload: 'breadsticks' }, adding the payload to the all array 
