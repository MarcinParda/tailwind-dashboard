import {ChannelBlock, Dropdown} from "components/ChannelBar/components";

const general = ['tasks', 'meetings'];
const topics = ['work-improvements', 'life-improvements'];
const integrations = ['places', 'date'];

const ChannelBar = () => {
  return (
    <div className='channel-bar shadow-lg'>
      <ChannelBlock />
      <div className='channel-container'>
        <Dropdown header='General' selections={general} />
        <Dropdown header='Topics' selections={topics} />
        <Dropdown header='Integrations' selections={integrations} />
      </div>
    </div>
  );
};

export default ChannelBar;
