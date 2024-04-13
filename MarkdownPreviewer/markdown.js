const headings = `
# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6
`;

const altheadings = `

Heading level 1
===============

Heading level 2
---------------
`;

const paras = `
Don't put tabs or spaces in front of your paragraphs.

Keep lines left-aligned like this.

`;

const linebreaks = `
First line with two spaces after.
And the next line.
Third line with line break.\n
And another one.\n
And another one with three.\n\n\n
`;

const emphasis = `
I just love **bold text**.
I just love __bold text__.
Love**is**bold
`;

const italicized = `
Italicized text is the *cat's meow*.

Italicized text is the _cat's meow_.

A*cat*meow
`;

const bolditalics = `
This text is ***really important***.
This text is ___really important___.
This text is __*really important*__.
This text is **_really important_**.
This is really***very***important text.
`;

const blockquote = `
> Dorothy followed her through many of the beautiful rooms in her castle.
`;

const blockquotes = `
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
`;

const nestedblockquotes = `
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
`;

const bqswithothers = `
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
`;

const orderedlists = `
1. First item
2. Second item
3. Third item
4. Fourth item

First item
Second item
Third item
Fourth item

1. First item
1. Second item
1. Third item
1. Fourth item

First item
Second item
Third item
Fourth item

1. First item
8. Second item
3. Third item
5. Fourth item

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item
`;

const unorderedlists = `
- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

- 1968\\. A great year!
- I think 1969 was second best.

* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3. Update the title to match the name of your website.
`;

const nestedlists = `
1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item
`;

const images = `
1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Tux, the Linux mascot](https://markdownguide.org/assets/images/tux.png)

3. Close the file.

![The San Juan Mountains are beautiful!](https://markdownguide.org/assets/images/san-juan-mountains.jpg "San Juan Mountains")

[![An old rock in the desert](https://markdownguide.org/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
`;

const code = `
At the command prompt, type \`nano\`.

\`\`Use \`code\` in your Markdown file.\`\`

    <html>
      <head>
      </head>
    </html>

`;

const horizontalrules = `
***

---

_________________
`;

const links = `
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

<https://www.markdownguide.org>
<fake@example.com>

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [\`code\`](#code).

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfortable.

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

[a novel](https://en.wikipedia.org/wiki/The_Milagro_Beanfield_War_%28novel%29)

<a href="https://en.wikipedia.org/wiki/The_Milagro_Beanfield_War_(novel)">a novel</a>
`;

const escapechars = `
\\* Without the backslash, this would be a bullet in an unordered list.
`;

const testString = headings.concat(
  altheadings,
  paras,
  linebreaks,
  emphasis,
  italicized,
  bolditalics,
  blockquote,
  blockquotes,
  nestedblockquotes,
  bqswithothers,
  orderedlists,
  unorderedlists,
  nestedlists,
  images,
  code,
  horizontalrules,
  links,
  escapechars
);

export default testString;