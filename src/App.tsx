// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from './store/hooks/redux';
// import { fetchUsers } from './store/reducers/ActionCreators';
import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

const App = () => {
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{display: 'flex'}}>
      <PostContainer />
      <PostContainer2 />
      </div>
      
    </div>
  );
}

export default App;
