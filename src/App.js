import { Container } from '@mui/material';
import Companies from './components/Companies';
import Hero from './components/Hero';
import JobLists from './components/JobLists';
import JobProcess from './components/JobProcess';
import Leads from './components/Leads';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Navbar />
        <Hero />
        <Companies />
        <JobProcess />
        <Leads />
        <JobLists />
      </Container>
    
      {/* <Container maxWidth="xl" sx={{bgcolor: "#F7FAFF"}}>
        <Leads />
      </Container> */}
      
    </div>
  );
};

export default App;