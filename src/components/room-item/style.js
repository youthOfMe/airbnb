import styled from "styled-components";


export const ItemWrapper = styled.div`
    // 防止因为组件大于flex容器而压缩 所以使用这个进行房子组件和图片被压缩
    // 压缩可能会导致图片被比例压缩 防止图片被比例压缩
    flex-shrink: 0; // 默认值为1 防止因为flex布局而压缩
    box-sizing: border-box;
    width: ${props => props.itemWidth};
    padding: 8px;

    .inner {
    width: 100%;
  }

  /* 对于给的图片宽高比不一致 调整为相同显示的方法 */
  .cover { 
    position: relative;
    box-sizing: border-box;
    /* padding相对的是宽度 */
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`