import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Question = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='max-w-[1240px] mx-auto'>
      <br/>
      <br/>
      <br/>
      <p style={{fontSize: 'xx-large'}} className='text-[#00df9a] font-bold p-2'>
          Ответы на все часто задаваемые вопросы
      </p>
      <br/>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
        Как работать в такси на своём авто?
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Ответ</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Для начала работы в такси необходимы документы: водительское удостоверение (выданное в РФ, Беларуси, Кыргызстане, Казахстане, Абхазии или Южной Осетии); паспорт ТО и специальная лицензия (можно получить за счёт нашей компании);
        <br/>
        Для работы подходят только 4-х дверные автомобили;
        <br/>
        Заказы могут выполнять водители старше 21 года со стажем вождения от 3-х лет;
        <br/>
        Также вам понадобится смартфон с GPS-модулем и 2 ГБ оперативной памяти;
        <br/>
        Подайте заявку на подключение к Яндек.Такси на нашем сайте.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>О показателях водителя</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Ответ
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Всё про рейтинг, Активность и работу с ними.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
        Какие условия мойки необходимы после оклейки?
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Ответ
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Мы не рекомендуем вам мыть машину в течение 3-4 дней после оклейки. Также нежелательны автоматические мойки, их следует заменить на бесконтактные. 
        Также хочется отметить еще один положительный момент виниловой пленки – она обладает свойством «антидождь» и является менее маркой поверхностью, чем ЛКП.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>Как пленка влияет на ЛКП? Можно ли ее потом снять?</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Ответ
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Мы используем только качественную пленку, которая не вредит, а наоборот, защищает ЛКП. Если вы решили убрать пленку насовсем или поменять дизайн
        автомобиля и поклеить его другой пленкой, разумеется, вы можете ее снять. Однако, чтобы не повредить лакокрасочное покрытие машины, стоит предоставить это специалистам. В редких случаях после удаления плёнки вам нужно будет отполировать поверхность, на которой был винил.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>Какой срок действия лицензии на такси?</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Ответ
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Срок действия обусловлен законодательством Российской Федерации и составляет 5 лет с момента выдачи официального документа на руки. 
        Лицензия на такси может быть выдана только на 5 лет. Никаких полгода, на 1 год, и на 2 года не бывает!
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>В каком виде я должен вернуть прокатный автомобиль?</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Ответ
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Автомобиль, взятый Вами напрокат, должен быть возвращён чистым и с полным баком. Для удобства наших клиентов, мы предлагаем услуги мойки автомобиля на территории нашего автотехцентра. 
        Прокатный автомобиль выдаётся полностью оснащённым аптечка, огнетушитель, запаска и т.д.), всё это фиксируется в акте приёмки автомобиля. Возврат авто производится так же по акту, в той комплектации, что и выдавался клиенту.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>Каков минимальный срок аренды автомобиля, предоставляемого вашей компанией?</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Ответ
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Минимальный срок аренды автомобиля в нашей компании 1 сутки ( 24 часа ) Если вы хотите взять авто на меньший срок, пожалуйста, но оплату мы возьмём как за сутки. 
        При аренде автомобиля на срок, более чем сутки, вы можете прибавлять срок аренды в 0,5 суток. Например вы хотите взять автомобиль утром, а вернуть вечером следующего дня. Мы рассчитаем оплату аренды как 1,6 суточного тарифа. Т.е. за лишние пол суток вы платите 60% суточного тарифа.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
  )
}

export default Question