import React from 'react'
import {Input, Inputicon, Textarea, Checkbox, Radio} from '_components/form'

function Index(){
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        {/* INPUT */}
        <div className="col-md-3 mb-3">
          <h4 className="border-bottom border-1 pb-2 mt-0 text-primary">Input</h4>
          <Input sm name="name" placeholder="Default Input" onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" password placeholder="Password" onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" placeholder="With Value" defaultValue={'With Value'} onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" rowClass="border border-gray radius-5 p-1" placeholder="With rowClass" onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" className="radius-50 border border-gray" placeholder="With className" onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" title="With Title" placeholder="With Title" onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" label="With Label" placeholder="With Label" onChange={() => ''} />
        </div>
        {/*ICON*/}
        <div className="col-md-3 mb-3">
          <h4 className="border-bottom border-1 pb-2 mt-0 text-primary">Icon</h4>
          <Input sm name="name" icon={<i className="uil uil-user"/>} placeholder="Icon Left" onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" icon={<i className="uil uil-user"/>} placeholder="Icon Right" right onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" icon="Rp." placeholder="Text Left" onChange={() => ''} />
          <hr className="my-2"/>
          <Input sm name="name" icon="%" placeholder="Text Right" right onChange={() => ''} />
          <h4 className="border-bottom border-1 pb-2 mt-4 text-primary">Fused Icon</h4>
          <Inputicon sm name="name" icon={<i className="uil uil-search"/>} placeholder="Fused Left" onChange={() => ''} />
          <hr className="my-2"/>
          <Inputicon sm name="name" icon={<i className="uil uil-search"/>} placeholder="Fused Right" right onChange={() => ''} />
        </div>
        {/* TEXTAREA */}
        <div className="col-md-3 mb-3">
          <h4 className="border-bottom border-1 pb-2 mt-0 text-primary">Textarea</h4>
          <Textarea sm name="name" placeholder="Default Textarea" onChange={() => ''} />
          <hr className="my-2"/>
          <Textarea sm name="name" placeholder="With Value" defaultValue={'With Value'} onChange={() => ''} />
          <hr className="my-2"/>
          <Textarea sm name="name" rowClass="border border-gray radius-5 p-1" placeholder="With rowClass" onChange={() => ''} />
          <hr className="my-2"/>
          <Textarea sm name="name" className="radius-10 border border-gray" placeholder="With className" onChange={() => ''} />
          <hr className="my-2"/>
          <Textarea sm name="name" title="With Title" placeholder="With Title" onChange={() => ''} />
          <hr className="my-2"/>
          <Textarea sm name="name" label="With Label" placeholder="With Label" onChange={() => ''} />
          <hr className="my-2"/>
          <Textarea sm name="name" noResize placeholder="Disable Resize" onChange={() => ''} />
          <hr className="my-2"/>
          <Textarea sm name="name" rows={5} placeholder="Textarea Height" onChange={() => ''} />
        </div>
        {/* TOGGLE */}
        <div className="col-md-3 mb-3">
          <h4 className="border-bottom border-1 pb-2 mt-0 text-primary">Toggle</h4>
          {/*CHECKBOX*/}
          <Checkbox label="Checkbox" labelClass="text-nowrap"  id="c1" name="checkbox" value="1" checked onChange={() => ''} />
          <Checkbox small label="Small Label" labelClass="text-nowrap"  id="c2" name="checkbox" value="1" checked onChange={() => ''} />
          <Checkbox circle label="Checkbox Circle" labelClass="text-nowrap"  id="c3" name="checkbox" value="1" checked onChange={() => ''} />
          <Checkbox circle label="Checkbox Theme" theme="info" labelClass="text-nowrap"  id="c4" name="checkbox" value="1" checked onChange={() => ''} />
          <hr className="my-2"/>
          {/*SWITCH*/}
          <Checkbox switch label="Switch" labelClass="text-nowrap"  id="s1" name="switch" value="1" checked onChange={() => ''} />
          <Checkbox switch small label="Small Label" labelClass="text-nowrap"  id="s2" name="switch" value="1" checked onChange={() => ''} />
          <Checkbox switch label="Switch Theme" theme="info" labelClass="text-nowrap"  id="s3" name="switch" value="1" checked onChange={() => ''} />
          <hr className="my-2"/>
          {/*RADIO*/}
          <div className="">
            <Radio label="Radio 1" id="r11" name="radio1" value="1" checked/>
            <Radio label="Radio 2" id="r12" name="radio1" value="0" />
          </div>
          <div className="radio-info mt-2">
            <Radio label="Theme 1" id="r21" name="radio2" value="1" />
            <Radio label="Theme 2" id="r22" name="radio2" value="0" checked />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
