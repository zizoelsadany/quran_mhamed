import React from 'react';
import sheikhImage from '../../images.jfif';

const Biography = () => {
  return (
    <div className="biography-card glass">
      <div className="bio-image-container">
        <img 
          src={sheikhImage} 
          alt="الشيخ محمد أحمد حسن - دولة التلاوة" 
          className="bio-image"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div className="bio-content">
        <h2>القارئ الشيخ محمد أحمد حسن</h2>
        <p>
          من أبرز القراء بجمهورية مصر العربية، وأحد أئمة وخطباء الجامع الأزهر الشريف. 
          نشأ على حب القرآن الكريم وأتم حفظه في سن مبكرة، وتميز بجمال صوته العذب 
          وقدرته الفائقة على إيصال معاني الآيات إلى القلوب.
        </p>
        <p>
          يجمع الشيخ في تلاوته بين إتقان أحكام التجويد والخشوع، ويمثل امتداداً 
          لمدارس التلاوة المصرية الأصيلة. نال إعجاب الكثيرين بفضل تلاواته الخاشعة 
          في صلوات التراويح والتهجد ومشاركاته في المسابقات القرآنية والمحافل التي أضاءها بصوته الندي، وتألقه في برنامج دولة التلاوة.
        </p>
      </div>
    </div>
  );
};

export default Biography;
