import { Row, Col } from 'antd';
import GridStyles from './grid.module.css';

export default function Dashboard() {
  return (
    <div className={GridStyles.grid}>
      <p>This is an example of a grid layout using AntD</p>
      <p className={GridStyles.spaced}>
        The grid is 24 columns wide. The first row is a single column, the
        second row is two columns, the third row is three columns, and the
        fourth row is four columns. These are all spaced out evenly.
      </p>
      <Row gutter={14}>
        <Col span={24}>
          <div className={GridStyles.card}>col-6</div>
        </Col>
      </Row>
      <Row gutter={14}>
        <Col span={12}>
          <div className={GridStyles.card}>col-12</div>
        </Col>
        <Col span={12}>
          <div className={GridStyles.card}>col-12</div>
        </Col>
      </Row>
      <Row gutter={14}>
        <Col span={8}>
          <div className={GridStyles.card}>col-8</div>
        </Col>
        <Col span={8}>
          <div className={GridStyles.card}>col-8</div>
        </Col>
        <Col span={8}>
          <div className={GridStyles.card}>col-8</div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div className={GridStyles.card}>
            col-6 <em>( notice that this row doesn&apos;t have a gutter )</em>
          </div>
        </Col>
        <Col span={6}>
          <div className={GridStyles.card}>col-6</div>
        </Col>
        <Col span={6}>
          <div className={GridStyles.card}>col-6</div>
        </Col>
        <Col span={6}>
          <div className={GridStyles.card}>col-6</div>
        </Col>
      </Row>
      <p className={GridStyles.spaced}>
        But you can also create uneven columns by adding up the spans to be less
        than 24. For example, the following row has a column that is 16 wide and
        another that is 8 wide.
      </p>
      <Row gutter={14}>
        <Col span={16}>
          <div className={GridStyles.card}>col-16</div>
        </Col>
        <Col span={8}>
          <div className={GridStyles.card}>col-8</div>
        </Col>
      </Row>

      <p className={GridStyles.spaced}>
        But when we use a grid, the columns will automatically adjust to the
        size of the screen. They will shrink/grow based on the width of the
        window. (Check it out by resizing this window).
        <br></br>
        <br></br>
        However, sometimes we want to fit in items and have them reposition and
        reflow based on the screen size. This is where flexbox comes in.
      </p>
      <p className={GridStyles.spaced}>
        Notice how the following items are all the same size and are spaced out
        evenly. but when the screen size changes, they will reposition
        themselves, even going down to the next row if needed.
      </p>

      <div className={GridStyles.flex}>
        <div className={GridStyles.largeCard}>Option 1</div>
        <div className={GridStyles.largeCard}>Option 2</div>
        <div className={GridStyles.largeCard}>Option 3</div>
        <div className={GridStyles.largeCard}>Option 4</div>
        <div className={GridStyles.largeCard}>Option 5</div>
        <div className={GridStyles.largeCard}>Option 6</div>
        <div className={GridStyles.largeCard}>Option 7</div>
        <div className={GridStyles.largeCard}>Option 8</div>
        <div className={GridStyles.largeCard}>Option 9</div>
        <div className={GridStyles.largeCard}>Option 10</div>
        <div className={GridStyles.largeCard}>Option 11</div>
        <div className={GridStyles.largeCard}>Option 12</div>
      </div>

      <p className={GridStyles.spaced}>
        And when we have big cards, they take up more space, but they will still
        reposition themselves based on the screen size.
      </p>
      <div className={GridStyles.flex}>
        <div className={GridStyles.hugeCard}>Option 1</div>
        <div className={GridStyles.hugeCard}>Option 2</div>
        <div className={GridStyles.hugeCard}>Option 3</div>
        <div className={GridStyles.hugeCard}>Option 4</div>
        <div className={GridStyles.hugeCard}>Option 5</div>
        <div className={GridStyles.hugeCard}>Option 6</div>
      </div>

      <p className={GridStyles.spaced}>
        In conclusion, grids are great for when you want to have a fixed layout
        that doesn&apos;t change. But when you want to have items that
        reposition themselves based on the screen size, flexbox is the way to
        go.
      </p>
    </div>
  );
}
