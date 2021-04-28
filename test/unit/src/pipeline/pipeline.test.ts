import { expect } from 'chai';
import Pipeline from '../../../../src/pipeline/pipeline';

describe('pipeline test unit', function () {
  const pipeline = new Pipeline();
  it('should get list pipelines', async function () {
    const list = await pipeline.list();
    expect(list).to.have.lengthOf(1);
  });
  it('should view one pipelines', async function () {
    const pl = await pipeline.view();
    expect(pl).to.have.property('id');
  });
});
