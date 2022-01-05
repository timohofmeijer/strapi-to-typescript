export type StrapiType = 'string' | 'number' | 'boolean' | 'text' | 'date' | 'email' | 'component' | 'enumeration' | 'dynamiczone';
export type Strapi4AttributeType = 'string' | 'text' | 'richtext' | 'enumeration' | 'email' | 'password' | 'uid' | 'date' | 'time' | 'datetime' | 'timestamp' | 'integer' | 'biginteger' | 'float' | 'decimal' | 'boolean' | 'array' | 'json' | 'media' | 'relation' | 'component' | 'dynamiczone' | 'locale' | 'localizations';
type Strapi4RelationType = 'oneToOne' | 'oneToMany' | 'manyToOne' | 'manyToMany'
export interface IStrapiModelAttribute {
  unique?: boolean;
  required?: boolean;
  type?: StrapiType;
  default?: string | number | boolean;
  dominant?: boolean;
  collection?: string;
  model?: string;
  via?: string;
  plugin?: string;
  enum?: string[];
  component?: string;
  components?: string[];
  repeatable?: boolean;
}

export interface IStrapiModel {
  /** Not from Strapi, but is the filename on disk */
  _filename: string;
  _isComponent?: boolean;

  connection: string;
  collectionName: string;
  info: {
    name: string;
    description: string;
    icon?: string;
  };
  options?: {
    timestamps: boolean;
  };
  attributes: { [attr: string]: IStrapiModelAttribute };
}

export interface IStrapiModelExtended extends IStrapiModel {
  // use to output filename
  ouputFile: string;
  // interface name
  interfaceName: string;
  // model name extract from *.(settings|schema).json filename. Use to link model.
  modelName: string;
}

export interface IStrapi4ModelAttribute {
  type?: Strapi4AttributeType;
  relation?: Strapi4RelationType;
  target?: string;
  mappedBy?: string;
  inversedBy?: string;

  repeatable?: boolean;
  component?: string;
  components?: string[];

  required?: boolean;
  max?: number;
  min?: number;
  minLength?: number;
  maxLength?: number;
  private?: boolean;
  configurable?: boolean;

  targetField?: string;
  options?: string;

  default?: string | number | boolean;
  unique?: boolean;
  enum?: string[];
}

export interface IStrapi4Model {
  /** Not from Strapi, but is the filename on disk */
  _filename: string;
  _isComponent?: boolean;

  kind: 'collectionType' | 'singleType',
  tableName: string;
  info: {
    displayName: string;
    singularName: string;
    pluralName: string;
    description: string;
    icon: string;
  };
  options?: {
    privateAttributes: string[];
    populateCreatorFields: boolean;
    draftAndPublish: boolean;
  };
  attributes: { [attr: string]: IStrapi4ModelAttribute };
}

export interface IStrapi4ModelExtended extends IStrapi4Model {
  // use to output filename
  ouputFile: string;
  // interface name
  interfaceName: string;
  // model name extract from *.(settings|schema).json filename. Use to link model.
  modelName: string;
}
