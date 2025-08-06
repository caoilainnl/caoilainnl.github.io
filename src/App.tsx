import './App.css';
import { FaGithub } from 'react-icons/fa';
import './index.css';

const Card = ({
  title,
  description,
  contribution,
  link,
  id,
}: {
  title: string;
  description: string;
  contribution?: string;
  link: string;
  id: string;
}) => {
  return (
    <div className="col-md-6">
      <div id={id} className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <h3 className="card-title h5 fw-semibold text-dark mb-3">{title}</h3>
          <p className="card-text text-muted mb-4">{description}</p>
          {contribution && (
            <div className="mb-4">
              <p className="small mb-0">{contribution}</p>
            </div>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm mt-auto"
          >
            View On Github
          </a>
        </div>
      </div>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="container py-5">
      <h2 className="display-5 fw-semibold text-dark mb-5 text-center">
        {title}
      </h2>
      <div className="row g-4">{children}</div>
    </section>
  );
};

const Education = ({
  degree,
  university,
  courses,
}: {
  degree: string;
  university: string;
  courses: string[][];
}) => {
  return (
    <div className="col-12">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <h3 className="card-title h5 fw-semibold text-dark mb-3">{degree}</h3>
          <p className="card-text text-muted mb-4">{university}</p>

          <div className="mb-4">
            <h4 className="h6 fw-medium text-dark mb-3">Key Courses</h4>
            <div className="row g-2">
              {courses.map((course, index) => (
                <div key={index} className="col-6">
                  <a href={course[1]}>{course[0]}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <main className="min-vh-100">
      <header className="bg-light shadow-sm py-5 border-bottom">
        <div className="container text-center">
          <h1 className="display-4 fw-bold text-dark mb-3">Caoilainn Lynch</h1>
          <div className="bio">
            <p className="fs-5 text-muted mb-2">
              BSc Computer Science, University of Leeds
            </p>
          </div>
        </div>
      </header>

      <Section title="Projects">
        <Card
          title="Websockets for CCXT GO"
          description="A JavaScript / TypeScript / Python / C# / PHP / GO cryptocurrency trading API with support for more than 100 bitcoin/altcoin exchanges"
          contribution="I added functionality to track real-time trading data from over 100 cryptocurrency exchanges. This includes watching OrderBook updates, trade activity, ticker changes, account balances, and order statuses. I built this using Go channels and the Gorilla WebSocket library to handle streaming data efficiently from the exchanges’ websocket APIs. To speed up development, I converted a lot of TypeScript code into Go so the same features could work in both languages.

I also improved the rate limiting system by replacing the old leaky bucket method with a rolling window rate limiter. The old system limited requests to 1 per second, which caused bursts of 60 requests to be sent all at once, then a long wait. The rolling window limiter spreads out requests more evenly, allowing 60 requests per minute without hitting limits. I implemented this new limiter in TypeScript, Python, PHP, C#, and Go, so it works consistently no matter which language or exchange is being used."
          link="https://github.com/ccxt/ccxt"
          id="ccxt"
        />
        <Card
          title="AST Transpiler"
          description="AST Transpiler that converts Typescript into different languages (PHP, Python, C#, Go) "
          contribution="I implemented GO websocket code transpilation functionality for the CCXT repository, advancing the GO transpilation capabilities to a more complete state"
          link="https://github.com/ccxt/ast-transpiler"
          id="ast-transpiler"
        />
      </Section>
      <Section title="Education">
        <Education
          degree="BSc Computer Science"
          university="University of Leeds"
          courses={[
            [
              'Information Visualization',
              'https://github.com/caoilainnl/information-visualization',
            ],
            [
              'Algorithms & Data Structures',
              'https://github.com/caoilainnl/algorithms-and-datastructures',
            ],
            [
              'Distributed Systems',
              'https://github.com/caoilainnl/Distributed_Systems',
            ],
            [
              'Intelligent Systems & Robotics',
              'https://github.com/caoilainnl/intelligent-systems-and-robotics',
            ],
            ['Computer Graphics'],
            ['Programming Languages'],
            ['User Interfaces'],
            ['Parallel Computation'],
            [
              'Secure Computing',
              'https://github.com/caoilainnl/secure_computing',
            ],
            ['Machine Learning', 'https://github.com/caoilainnl/MLP'],
            ['Compiler Design', 'https://github.com/caoilainnl/databases'],
            ['Artificial Intelligence', 'https://github.com/caoilainnl/AI'],
            [
              'Operating Systems',
              'https://github.com/caoilainnl/operating-systems',
            ],
            ['Databases', 'https://github.com/caoilainnl/databases'],
          ]}
        />
      </Section>

      <footer className="bg-dark text-white py-4 mb-0">
        <div className="container text-center">
          <div className="d-flex flex-column align-items-center gap-3">
            <a
              href="https://github.com/caoilainnl"
              className="text-white text-decoration-none"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:caoilainn.lynch@proton.me"
              className="text-light text-decoration-none"
            >
              caoilainn.lynch@proton.me
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
