
import Footer from '../components/Footer'
import Header from '../components/Header'
import './index.less'
const data_h = {
  title: 'Personal Website',
  line:1
};
const data_f = [
  "©2019 Red Bull Air Race Chiba."
];

export default function IndexPage(props) {
  return (
    <>
      <Header data={data_h} />
      {props.children}
      <Footer data={data_f} />
    </>
  );
}
