import React from 'react';

const Education = () => {
  return (
    <div className="my-10 pb-10 px-5">
      <h3 className="text-center text-3xl font-bold mb-10">Education</h3>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {/* Education 1: Daffodil International University */}
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2019-2023</time>
            <div className="text-lg font-black">Daffodil International University</div>
            <div className="text-lg">BSc in Computer Science & Engineering</div>
            <div className="text-lg">CGPA: 3.66</div>
          </div>
          <hr />
        </li>

        {/* Education 2: Police Lines School & College */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2016-2018</time>
            <div className="text-lg font-black">Police Lines School & College, Rangpur</div>
            <div className="text-lg">HSC</div>
            <div className="text-lg">GPA: 5.00</div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
