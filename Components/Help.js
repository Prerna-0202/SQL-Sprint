"use client";
import React from 'react';

const Help = () => {
  return (
    <>
      <div className='h-[80%] w-[100%]'>
        <h1 className='font-bold'>SQL Sprint is an online SQL editor that provides various features:</h1>

        <h1 className='font-bold my-1'>Available Databases:</h1>
        <p className="">In the top-right section, you'll find "Your Database," where all available databases are listed. You can click on them to check their data.</p>

        <h1 className='font-bold   my-1'>Available Queries:</h1>
        <p className=''>On the far left side, there is a section called "Available Queries," where you can simply click on the provided queries to input them into the query box.</p>

        <div>
          <div>
            <h1 className='font-bold   my-1'>Input Box:</h1>
            <p className=''>At the top center, you'll see an input box with two buttons. In the input box, you can write your SQL query. Afterward, click the "Run" button above to execute the query. There's also a "Clear" button that clears the input box when clicked.</p>
          </div>
          <div>
            <h1 className='font-bold   my-1'>Output Box:</h1>
            <p className=''>In the bottom center, there's an output box where the results of your executed query are displayed.</p>
          </div>
        </div>

        <div className="">
          <div className="">
            <h1 className='font-bold   my-3'>History:</h1>
            <p className=''>The "History" section displays the latest 8 queries you've run.</p>
          </div>
          <div className="">
            <h1 className='font-bold   my-3'>Export:</h1>
            <p className=''>Clicking the "Export" button opens a dropdown menu with three options:</p>
            <ol className="list-decimal mx-3 ">
              <li>CSV - Clicking this option will download your output as a CSV file.</li>
              <li>JSON - Choosing this option will download your output as a JSON file.</li>
              <li>XML - Selecting this option will download your output as an XML file.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
