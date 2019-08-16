(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : factory((global.mdprofile = {}));
})(this, function(exports) {
  'use strict';

  var full = {
    identifier: 'full',
    namespace: 'org.adiwg.profile',
    alternateId: ['full'],
    title: 'Full',
    description: 'Every supported component',
    version: '0.1.15',
    components: {
      record: {},
      contact: {},
      dictionary: {}
    },
    nav: {
      record: [
        {
          title: 'Main',
          target: 'record.show.edit.main',
          tip: 'Basic information about the resource.'
        },
        {
          title: 'Metadata',
          target: 'record.show.edit.metadata',
          tip: 'Information about the metadata for the resource.'
        },
        {
          title: 'Keywords',
          target: 'record.show.edit.keywords',
          tip: 'Terms used to describe the resource.'
        },
        {
          title: 'Extent',
          target: 'record.show.edit.extent',
          tip: 'Information describing the bounds of the resource.'
        },
        {
          title: 'Spatial',
          target: 'record.show.edit.spatial',
          tip: 'Information concerning the spatial attributes of the resource.'
        },
        {
          title: 'Lineage',
          target: 'record.show.edit.lineage',
          tip: 'Information on the history of the resource.'
        },
        {
          title: 'Taxonomy',
          target: 'record.show.edit.taxonomy',
          tip: 'Information on the taxa associated with the resource.'
        },
        {
          title: 'Distribution',
          target: 'record.show.edit.distribution',
          tip: 'Information about obtaining the resource.'
        },
        {
          title: 'Constraints',
          target: 'record.show.edit.constraint',
          tip: 'Information about constraints applied to the resource.'
        },
        {
          title: 'Associated',
          target: 'record.show.edit.associated',
          tip: 'Other resources with a defined relationship to the resource.'
        },
        {
          title: 'Documents',
          target: 'record.show.edit.documents',
          tip: 'Other documents related to, but not defining, the resource.'
        },
        {
          title: 'Funding',
          target: 'record.show.edit.funding',
          tip:
            'Information about funding allocated to development of the resource.'
        },
        {
          title: 'Dictionaries',
          target: 'record.show.edit.dictionary',
          tip: 'Data dictionaries associated with the resource.'
        }
      ],
      dictionary: [
        {
          title: 'Main',
          target: 'dictionary.show.edit.index',
          tip: 'Basic information about the dictionary.'
        },
        {
          title: 'Citation',
          target: 'dictionary.show.edit.citation',
          tip: 'The citation for the dictionary.'
        },
        {
          title: 'Domains',
          target: 'dictionary.show.edit.domain',
          tip: 'Information about defined value lists.'
        },
        {
          title: 'Entities',
          target: 'dictionary.show.edit.entity',
          tip:
            'Information about entities(tables) and attributes(columns or fields).'
        }
      ]
    }
  };

  var basic = {
    identifier: 'basic',
    namespace: 'org.adiwg.profile',
    alternateId: ['basic'],
    title: 'Basic',
    description:
      'A profile with the minimum recommended elements for discovery.',
    version: '0.1.15',
    components: {
      record: {
        main: {
          recordId: false,
          citation: {
            identifier: {
              graphicOverview: false
            }
          },
          shortAbstract: false,
          supplementalInfo: false,
          environmentDescription: false,
          timePeriod: {
            id: false,
            periodName: false,
            interval: false,
            timeInterval: false,
            duration: false
          },
          graphicOverview: false
        },
        metadata: {
          maintenance: {
            date: false,
            contact: false,
            note: false,
            scope: false
          },
          defaultLocale: false,
          alternateMetadataReference: false
        },
        distribution: {
          distributor: {
            transferOption: {
              transferFrequency: false,
              offlineOption: {
                density: false,
                units: false,
                numberOfVolumes: false,
                identifier: false
              }
            }
          }
        },
        associated: {
          resourceCitation: {
            graphicOverview: false
          }
        },
        constraints: {
          graphic: false
        },
        contact: {},
        dictionary: {}
      }
    },
    nav: {
      record: [
        {
          title: 'Main',
          target: 'record.show.edit.main',
          tip: 'Basic information about the resource.'
        },
        {
          title: 'Metadata',
          target: 'record.show.edit.metadata',
          tip: 'Information about the metadata for the resource.'
        },
        {
          title: 'Keywords',
          target: 'record.show.edit.keywords',
          tip: 'Terms used to describe the resource.'
        },
        {
          title: 'Extent',
          target: 'record.show.edit.extent',
          tip: 'Information describing the bounds of the resource.'
        },
        {
          title: 'Taxonomy',
          target: 'record.show.edit.taxonomy',
          tip: 'Information on the taxa associated with the resource.'
        },
        {
          title: 'Distribution',
          target: 'record.show.edit.distribution',
          tip: 'Information about obtaining the resource.'
        },
        {
          title: 'Constraints',
          target: 'record.show.edit.constraint',
          tip: 'Information about constraints applied to the resource.'
        }
      ],
      dictionary: [
        {
          title: 'Main',
          target: 'dictionary.show.edit.index',
          tip: 'Basic information about the dictionary.'
        },
        {
          title: 'Citation',
          target: 'dictionary.show.edit.citation',
          tip: 'The citation for the dictionary.'
        },
        {
          title: 'Domains',
          target: 'dictionary.show.edit.domain',
          tip: 'Information about defined value lists.'
        },
        {
          title: 'Entities',
          target: 'dictionary.show.edit.entity',
          tip:
            'Information about entities(tables) and attributes(columns or fields).'
        }
      ]
    }
  };

  var profileSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'profile-schema',
    version: 'VERSION',
    type: 'object',
    description: 'JSON schema for mdEditor profile definitions',
    additionalProperties: false,
    properties: {
      identifier: {
        type: 'string'
      },
      alternateId: {
        type: 'array',
        description: 'List of alternate identifiers for the profile definition',
        items: {
          type: 'string'
        }
      },
      namespace: {
        type: 'string'
      },
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      version: {
        type: 'string'
      },
      components: {
        $ref: '#/definitions/Components'
      },
      nav: {
        $ref: '#/definitions/Nav'
      }
    },
    required: ['description', 'identifier', 'namespace', 'title', 'version'],
    title: 'Profile definition',
    anyOf: [
      {
        type: 'object',
        title: 'components is required',
        required: ['components']
      },
      {
        type: 'object',
        title: 'nav is required',
        required: ['nav']
      }
    ],
    definitions: {
      Components: {
        type: 'object',
        additionalProperties: false,
        properties: {
          record: {
            $ref: '#/definitions/Component'
          },
          contact: {
            $ref: '#/definitions/Component'
          },
          dictionary: {
            $ref: '#/definitions/Component'
          }
        },
        title: 'Components'
      },
      Component: {
        type: 'object'
      },
      Nav: {
        type: 'object',
        additionalProperties: true,
        propertyNames: {
          enum: ['record', 'contact', 'dictionary']
        },
        patternProperties: {
          '{record|contact|dictionary': {
            $ref: '#/definitions/NavItem'
          }
        },
        title: 'Nav'
      },
      NavItem: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            title: {
              type: 'string'
            },
            target: {
              type: 'string'
            },
            tip: {
              type: 'string'
            }
          },
          required: ['target', 'tip', 'title'],
          title: 'NavItem'
        },
        title: 'Navigation Section'
      }
    }
  };

  /**
   * @module mdProfile
   */

  function asArray() {
    return [full, basic];
  }

  exports.full = full;
  exports.basic = basic;
  exports.schema = profileSchema;
  exports.asArray = asArray;

  Object.defineProperty(exports, '__esModule', { value: true });
});
