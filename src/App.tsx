import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom';
import { NewNote } from './NewNote';

export type Note = {
  id: string;
} & NoteData

export type NoteData = {
  title: string
  markdowm: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {
  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<h1>Hello this is /</h1>} />
        <Route path='/new' element={<NewNote />} />
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>} />
          <Route path='edit' element={<h1>Yoo this is Edit</h1>} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
  );
}

export default App;
