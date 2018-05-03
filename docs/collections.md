# Collections

## Users

- GUID

## MaterialTypes

- name string
- description string
- attributes [{}]
- images [string]
- ancestors [ObjectId] (the 'path' from root to this node)

## MaterialInventory

- name string
- description string
- attributes {} (material type attribute values)
- images [string]
- notes string
- userId ObjectId (foreign key)
- materialTypeId ObjectId (foreign key)

copied from MaterialTypes on every insert
- materialTypeName string
- materialTypeDescription string
- materialImages [string]
- materialAncestors [ObjectId]

## PatternBrand

- name string
- description string

## Pattern

- number string
- minSize number
- maxSize number
- envelopeFrontImage [string]
- envelopeBackImage [string]
- lineArt [string]
- yardageCharts {[{heading: string, rows: [label: string, cells: []}
- patternBrandId ObjectId (foreign key)

copied from PatternBrand
- patternBrandName string
- patternBrandDescription string

## PatternInventory

- name string
- description string
- notes string
- patternId ObjectId (foreign key)

