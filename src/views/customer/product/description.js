function Index(){
  return(
    <div className="m-0 text-10 text-justifys">
      {
        Array(2).fill().map((r, key) => (
          <div className="my-2" key={key}>
            <p className="m-0 bold">Lorem ipsum</p>
            <p className="m-0 lh-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus a ipsum doloremque laborum consectetur cumque porro, ducimus saepe laudantium aperiam.</p>
          </div>
        ))
      }
      <table className="table table-xs table-center table-striped table-borderless">
        <thead>
          <tr>
            <th>SIZE</th>
            <th>P</th>
            <th>L</th>
            <th>T</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S</td>
            <td>10cm</td>
            <td>15cm</td>
            <td>20cm</td>
          </tr>
          <tr>
            <td>M</td>
            <td>10cm</td>
            <td>15cm</td>
            <td>20cm</td>
          </tr>
          <tr>
            <td>L</td>
            <td>10cm</td>
            <td>15cm</td>
            <td>20cm</td>
          </tr>
        </tbody>
      </table>
      <p className="bold mb-0">Title</p>
      <ol className="pl-3 mb-3">
        {
          Array(3).fill().map((r, key) => (
            <li className="" key={key}> Lorem ipsum </li>
          ))
        }
      </ol>
      <p className="bold mb-0">Title</p>
      <ul className="pl-3 mb-3">
        {
          Array(3).fill().map((r, key) => (
            <li className="" key={key}> Lorem ipsum </li>
          ))
        }
      </ul>
      <p className="text-info mb-0">#lorem #ipsum #dolor #sit #amet #consectetur #adipisicing #elit #Fugit #debitis #repellendus #accusantium #dolorem #reprehenderit #minus #harum #dolores #architecto #aliquam #blanditiis.</p>
    </div>
  )
}
export default Index
