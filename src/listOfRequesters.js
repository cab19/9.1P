import faker from 'faker'
const requesterList =[
    { 
        "key": '0',
        "logo" : faker.image.avatar(),
        "name" : faker.name.findName(),
        "description" : faker.lorem.paragraph()
    },
    {  
        "key": '1',
        "logo" : faker.image.avatar(),
        "name" : faker.name.findName(),
        "description" : faker.lorem.paragraph()
    },
    {   
        "key": '2',
        "logo" : faker.image.avatar(),
        "name" : faker.name.findName(),
        "description" : faker.lorem.paragraph()
    },
    {   
        "key": '3',
        "logo" : faker.image.avatar(),
        "name" : faker.name.findName(),
        "description" : faker.lorem.paragraph()
      },
      {   
        "key": '4',
        "logo" : faker.image.avatar(),
        "name" : faker.name.findName(),
        "description" : faker.lorem.paragraph()
    },
    {   
        "key": '5',
        "logo" : faker.image.avatar(),
        "name" : faker.name.findName(),
        "description" : faker.lorem.paragraph()
      },
]

export default requesterList