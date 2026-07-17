import { students } from '../../data/data';
import StudentItem from '../Student/StudentItem';
const student = students[0];
export default function App() {
  return <StudentItem student={student} />;
}
