import { Card2, AntdIcons, Text } from '@/atoms/index';
import { ArticleBox } from '@/molecules/index';

const ArticleCard = ({ data = {} }) => {
  const { image, title, link, descriotion } = data;
  return (
    <Card2.Layout>
      <Card2.Header>
        <div className="text-4xl tracking-wide leading-relaxed">{title}</div>
        <div>
          <a target="blank" href={link}>
            <AntdIcons type="read" />
          </a>
        </div>
      </Card2.Header>
      <Card2.Content>
        <ArticleBox.Main>
          <ArticleBox.Image src={image} />
          <ArticleBox.Description contents={descriotion} />
        </ArticleBox.Main>
      </Card2.Content>
    </Card2.Layout>
  );
};

export default ArticleCard;
